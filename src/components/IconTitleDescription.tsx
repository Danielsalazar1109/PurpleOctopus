import React from 'react'

type IconTitleDescriptionProps = {
  icon: React.ReactNode
  title: string
  description: string
  description2?: string
  className?: string
  iconWrapperClassName?: string
  titleClassName?: string
  layout?: 'row' | 'column'
}

export function IconTitleDescription({
  icon,
  title,
  description,
  description2,
  className,
  iconWrapperClassName,
  titleClassName,
  layout = 'row',
}: IconTitleDescriptionProps) {
  const isColumn = layout === 'column'

  const rootClassName = [
    'flex',
    isColumn ? 'flex-col space-y-5 text-left' : 'items-start gap-4',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClassName}>
      <div
        className={[
          'flex items-center justify-center rounded-xl text-purple-700 shrink-0',
          'h-14 w-14 [&>svg]:h-8 [&>svg]:w-8',
          iconWrapperClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {icon}
      </div>

      <div>
        <h3
          className={[
            'font-semibold text-gray-900',
            isColumn ? 'text-xl md:text-2xl' : '',
            titleClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {title}
        </h3>

        {isColumn && description2 ? (
          <div className="mt-3 space-y-4 text-gray-700 leading-relaxed text-md">
            <p>{description}</p>
            <p>{description2}</p>
          </div>
        ) : (
          <p
            className={`text-gray-700 leading-relaxed ${
              isColumn ? 'mt-3 text-base md:text-lg' : 'text-sm'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
