import { FC } from 'react'
import { TIconProps } from '../iconBase/types'
import { IconWrapper } from '@/shared/components/icons/iconBase/IconWrapper/IconWrapper'
import Icon from '@/shared/components/icons/svg/like.svg'

const LikeIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon/>
  </IconWrapper>
)

export default LikeIcon
