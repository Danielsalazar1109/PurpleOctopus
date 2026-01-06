import React from 'react'

export type CodiconName = string

type CodiconProps = {
  name: CodiconName
  className?: string
  label?: string
}

export function Codicon({ name, className, label }: CodiconProps) {
  const ariaProps = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }

  return (
    <i
      {...ariaProps}
      className={['codicon', `codicon-${name}`, className].filter(Boolean).join(' ')}
    />
  )
}
