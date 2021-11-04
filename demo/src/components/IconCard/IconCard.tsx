import React, { useMemo } from 'react'
import styles from './IconCard.module.scss'
import cn from 'classnames'

export interface IconCardProps {
  className?: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string
  title: React.ReactNode
}

type IconType =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | React.ComponentType<React.HtmlHTMLAttributes<HTMLDivElement>>

export const IconCard: React.FC<IconCardProps> = ({ icon, title, className }) => {
  const Icon: IconType = useMemo(() => {
    if (typeof icon === 'string') {
      return function Icon(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
        return <div {...props} dangerouslySetInnerHTML={{ __html: icon }} />
      }
    }
    return icon
  }, [icon])

  return (
    <div className={cn(className, styles.card)}>
      <Icon className={styles.icon} />
      <div className={styles.title}>{title}</div>
    </div>
  )
}
