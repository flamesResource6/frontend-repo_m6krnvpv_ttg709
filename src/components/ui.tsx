import React from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <div className={twMerge('mx-auto w-full max-w-7xl px-6 md:px-8', className)}>{children}</div>
)

export const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} className={twMerge('py-20 md:py-28', className)}>
    {children}
  </section>
)

export const H1: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <h1 className={twMerge('text-4xl md:text-6xl font-semibold tracking-tight', className)}>{children}</h1>
)
export const H2: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <h2 className={twMerge('text-3xl md:text-4xl font-semibold tracking-tight', className)}>{children}</h2>
)
export const Sub: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <p className={twMerge('text-base md:text-lg text-gray-400', className)}>{children}</p>
)

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }>
= ({ className, variant = 'primary', ...props }) => (
  <button
    className={twMerge(
      'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      variant === 'primary'
        ? 'bg-[var(--color-primary)] text-white hover:opacity-90 active:opacity-80 focus-visible:ring-[var(--color-primary)]'
        : 'bg-white/10 text-white hover:bg-white/15 active:bg-white/20 focus-visible:ring-white',
      className
    )}
    {...props}
  />
)

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <div className={twMerge('rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm', className)}>
    {children}
  </div>
)

export const FadeIn: React.FC<React.PropsWithChildren<{ className?: string; delay?: number }>> = ({ className, delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -80px 0px' }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
)
