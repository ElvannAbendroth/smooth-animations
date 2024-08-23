import { motion, useScroll, useMotionValue, useTransform } from 'framer-motion'
import Icon from '@/ui/icon'
import { useState, useEffect, type FC } from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/ui/button'
import type { icons } from 'lucide-react'
import ScrollProgressBar from './ScrollProgressBar'

export type NavItem = {
  label: string
  href: string
  disabled?: boolean
  type: 'link' | 'button'
  target?: string
  icon?: keyof typeof icons
}

const navItems: NavItem[] = [
  { label: 'About', href: '/#about', type: 'link' },
  { label: 'Services', href: '/#services', type: 'link' },
  {
    label: 'Visit Repo',
    href: 'https://github.com/ElvannAbendroth/rock-your-astro-blank',
    type: 'button',
    icon: 'Github',
  },
]

interface NavbarProps {
  pathname: string
}

//React version of Navbar
export const Navbar: FC<NavbarProps> = ({ pathname }) => {
  return (
    <nav className="sticky top-0 bg-background px-4 py-3 md:py-4 md:px-6 ">
      <ScrollProgressBar />
      <div className="flex justify-between max-w-layout mx-auto">
        <a
          className="font-bold text-xl font-display hover:text-foreground-hover flex gap-3 place-items-center"
          href="/"
        >
          <Icon name="Rocket" /> <span>Rock Your Astro (Blank)</span>
        </a>
        <div className="flex flex-gap-12 items-center gap-4 ">
          <DesktopMenu navItems={navItems} className="hidden md:block" pathname={pathname} />
          <MobileMenu navItems={navItems} className="block md:hidden" pathname={pathname} />
          <div className="flex flex-row items-center gap-2 font-bold text-sm flex-wrap"></div>
        </div>
      </div>
    </nav>
  )
}

interface DesktopMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  navItems: NavItem[]
  pathname: string
}

export const DesktopMenu: FC<DesktopMenuProps> = ({ navItems, className, pathname, ...props }) => {
  return (
    <div className={cn('flex gap-4', className)} {...props}>
      <ul className="flex gap-4  ">
        {navItems.map(item => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
          if (item.type === 'link')
            return (
              <li key={item.label} className="align-middle self-center">
                <a
                  className={`hover:underline underline-offset-4 hover:text-primary ${
                    isActive ? 'underline text-primary' : ''
                  }`}
                  href={item.href}
                  target={item.target || '_self'}
                >
                  {item.label}
                </a>
              </li>
            )
          if (item.type === 'button')
            return (
              <li key={item.label} className="align-middle self-center">
                <a href={item.href} target={item.target || '_self'}>
                  <Button icon={item.icon}>{item.label}</Button>
                </a>
              </li>
            )
        })}
      </ul>
    </div>
  )
}

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  navItems: NavItem[]
  pathname: string
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, className, pathname, ...props }) => {
  return (
    <div className={cn('flex gap-4 align-center items-center', className)} {...props}>
      <Sheet>
        <SheetTrigger className="p-2 rounded-md hover:bg-input-hover data-[state=open]:bg-input-hover">
          <Icon name="Menu" size={21} strokeWidth={2.3} />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-center text-center items-center md:hidden h-screen">
          <ul className="md:hidden flex flex-col gap-4 align-center">
            {navItems.map(item => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              if (item.type === 'link')
                return (
                  <li key={item.label}>
                    <a
                      className={`lowercase font-bold text-lg hover:underline underline-offset-4 hover:text-primary ${
                        isActive ? 'underline text-primary' : ''
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              if (item.type === 'button')
                return (
                  <li key={item.label}>
                    <a href={item.href} target={item.target || '_self'}>
                      <Button icon={item.icon} size={'lg'}>
                        {item.label}
                      </Button>
                    </a>
                  </li>
                )
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}
