// eslint-disable-next-line import/no-unresolved
import { Property } from 'csstype'
import { rgb } from 'd3'

export const opacityColor = (color: Property.Color, val: number) => `
    ${rgb(color).copy({ opacity: val })}
`
