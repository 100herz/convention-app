import React from 'react'
import { Path, Polygon, Svg } from 'react-native-svg'

import { colors } from '@styles/theme'

interface Props {
  height?: number
}

const Logo: React.FC<Props> = ({ height = 25 }) => {
  return (
    <Svg width={height * 4.58} height={height} viewBox="0 0 405.31 88.5">
      <Path
        d="M123.22,435.26h2.12q-3.27,11.48-16.35,11.47a19.13,19.13,0,0,1-14.17-5.86Q89.09,435,89.1,425.38q0-9.9,6.2-16A20.12,20.12,0,0,1,110,403.19a19.41,19.41,0,0,1,9.37,2.31c2.85,1.51,4.28,3.37,4.28,5.56a3.79,3.79,0,0,1-.82,2.31,2.58,2.58,0,0,1-2.26,1.09c-2.11,0-3.41-1.27-3.89-3.79a7.58,7.58,0,0,0-1.78-4c-.84-.75-2.45-1.13-4.86-1.13q-6.44,0-9.71,4.58T97.07,423.9q0,9.5,3.46,14.86t10.58,5.36q9.51,0,12.11-8.86Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
      />
      <Path
        d="M126.37,424.88a21.21,21.21,0,0,1,6.06-15.44,20.95,20.95,0,0,1,29.85,0,21.3,21.3,0,0,1,6.06,15.44q0,10.19-6.16,16a20.9,20.9,0,0,1-14.85,5.81,20.66,20.66,0,0,1-14.85-5.91q-6.1-6-6.11-15.94Zm8,.25q0,10.72,3.42,15.05t9.56,4.28q6.3,0,9.61-4.28t3.37-15.05q0-10.62-3.32-15.15c-2.21-3-5.43-4.52-9.66-4.53s-7.42,1.51-9.66,4.53-3.32,8-3.32,15.15Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
        fill-rule="evenodd"
      />
      <Path
        d="M180.57,403.19h1.3a27.4,27.4,0,0,1,1.25,8.31,25.49,25.49,0,0,1,7.26-6.24,16.33,16.33,0,0,1,7.93-2.07,13.42,13.42,0,0,1,7.69,2,9,9,0,0,1,3.89,5,31.45,31.45,0,0,1,.87,8.51v12.59a82.65,82.65,0,0,0,.24,8.51,3.18,3.18,0,0,0,1.49,2.31,10.49,10.49,0,0,0,4.71.74v2.26H197.06v-2.26H198c2.31,0,3.82-.35,4.52-1a3.8,3.8,0,0,0,1.2-2.41q.15-1.38.15-8.12v-13a33.19,33.19,0,0,0-.48-6.79,6.29,6.29,0,0,0-2.45-3.64,7.91,7.91,0,0,0-5-1.57,11.91,11.91,0,0,0-6.73,2.16,22.64,22.64,0,0,0-6,6.4v16.43a82.65,82.65,0,0,0,.24,8.51,3.32,3.32,0,0,0,1.54,2.31,10.63,10.63,0,0,0,4.76.74v2.26h-19.9v-2.26a10.74,10.74,0,0,0,4.61-.69,2.92,2.92,0,0,0,1.59-2.07,63.19,63.19,0,0,0,.34-8.8v-12a68.37,68.37,0,0,0-.29-8.51,3,3,0,0,0-1.54-2.27q-1.25-.78-4.71-.78v-2.27a59.73,59.73,0,0,0,10.81-2.26Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
      />
      <Path
        d="M235.53,446.73h-2.79l-14-32.32a25.09,25.09,0,0,0-3.27-6,5.47,5.47,0,0,0-3.94-1.37v-2.27h17.79v2.27a11.15,11.15,0,0,0-4,.49,1.86,1.86,0,0,0-1.06,1.87q0,1.08,1.92,5.26l10.63,24.45,9.56-21.79q2.26-5.22,2.26-6.79,0-3.3-4.81-3.49v-2.27h13.27v2.27a5.72,5.72,0,0,0-4.13,2.11q-1.63,1.92-4.62,8.71l-12.78,28.83Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
      />
      <Path
        d="M289.3,418.44H261.85c-.13,1.94-.19,3.38-.19,4.33q0,10.62,3.22,16a10.67,10.67,0,0,0,9.71,5.31q8.75,0,12.4-8h2.31a13.78,13.78,0,0,1-6.11,7.87,18.65,18.65,0,0,1-9.95,2.81,18.84,18.84,0,0,1-9.47-2.56,20.7,20.7,0,0,1-7.25-7.33,21.79,21.79,0,0,1-2.84-11.46q0-9.56,5.48-15.84a17.36,17.36,0,0,1,13.7-6.35q7.74,0,12,4.82a16.67,16.67,0,0,1,4.47,10.43Zm-8.41-2a17.15,17.15,0,0,0,.14-2,8.73,8.73,0,0,0-2.5-6.69,8.28,8.28,0,0,0-6.06-2.41q-8.75,0-10.43,11.11Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
        fill-rule="evenodd"
      />
      <Polygon
        points="211.56 77.36 208.22 77.36 208.22 88.41 211.56 88.41 211.56 77.36 211.56 77.36"
        fill={colors.accentColor}
      />
      <Polygon
        points="221.24 79.92 221.38 79.92 224.91 88.41 230.6 88.41 230.6 77.36 227.27 77.36 227.47 85.85 227.33 85.85 223.75 77.36 218.11 77.36 218.11 88.41 221.44 88.41 221.24 79.92 221.24 79.92"
        fill={colors.accentColor}
      />
      <Polygon
        points="242.68 79.92 246.04 79.92 246.04 77.36 236.14 77.36 236.14 79.92 239.34 79.92 239.34 88.41 242.68 88.41 242.68 79.92 242.68 79.92"
        fill={colors.accentColor}
      />
      <Polygon
        points="254.95 79.78 260.64 79.78 260.64 77.36 251.62 77.36 251.62 88.41 260.76 88.41 260.76 85.99 254.95 85.99 254.95 83.84 260.29 83.84 260.29 81.79 254.95 81.79 254.95 79.78 254.95 79.78"
        fill={colors.accentColor}
      />
      <Path
        d="M359.74,441.14v-3h2.59c1.1,0,1.38.28,1.38,1.27,0,1.25.05,1.72-1.38,1.72Zm-3.33,5.5h3.33V443.7h2.59a1.2,1.2,0,0,1,1.36,1.39v1.55H367v-2.23c0-1.25-.88-1.91-2.25-2v-.12c2.37-.48,2.37-1.56,2.37-3.4,0-2.76-1.42-3.3-4.31-3.34h-6.43v11.05Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.accentColor}
        fill-rule="evenodd"
      />
      <Polygon
        points="287.39 79.92 287.52 79.92 291.06 88.41 296.75 88.41 296.75 77.36 293.41 77.36 293.61 85.85 293.48 85.85 289.89 77.36 284.26 77.36 284.26 88.41 287.59 88.41 287.39 79.92 287.39 79.92"
        fill={colors.accentColor}
      />
      <Path
        d="M399.74,444.74l.65,1.9h3.4L400,435.59h-5.07l-3.76,11.05h3.47l.62-1.9Zm-.67-2.16H396l1.51-4.78h0l1.55,4.78Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.accentColor}
        fill-rule="evenodd"
      />
      <Polygon
        points="325.07 79.92 328.44 79.92 328.44 77.36 318.53 77.36 318.53 79.92 321.73 79.92 321.73 88.41 325.07 88.41 325.07 79.92 325.07 79.92"
        fill={colors.accentColor}
      />
      <Polygon
        points="337.31 77.36 333.97 77.36 333.97 88.41 337.31 88.41 337.31 77.36 337.31 77.36"
        fill={colors.accentColor}
      />
      <Path
        d="M438.28,446.73c3.39,0,5.79-.65,5.79-4.06v-3.12c0-3.4-2.4-4.05-5.79-4.05s-5.79.65-5.79,4.05v3.12c0,3.41,2.4,4.06,5.79,4.06Zm0-2.57c-1.74,0-2.3-.16-2.35-1.81v-2.49c.05-1.64.61-1.8,2.35-1.8s2.35.16,2.35,1.8v2.49c0,1.65-.62,1.81-2.35,1.81Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.accentColor}
        fill-rule="evenodd"
      />
      <Polygon
        points="364.18 79.92 364.31 79.92 367.85 88.41 373.53 88.41 373.53 77.36 370.2 77.36 370.4 85.85 370.26 85.85 366.68 77.36 361.04 77.36 361.04 88.41 364.38 88.41 364.18 79.92 364.18 79.92"
        fill={colors.accentColor}
      />
      <Path
        d="M476.52,444.74l.65,1.9h3.4l-3.8-11.05H471.7L468,446.64h3.47l.61-1.9Zm-.67-2.16h-3.1l1.52-4.78h0l1.55,4.78Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.accentColor}
        fill-rule="evenodd"
      />
      <Polygon
        points="400.09 77.36 396.75 77.36 396.75 88.41 405.31 88.41 405.31 85.85 400.09 85.85 400.09 77.36 400.09 77.36"
        fill={colors.accentColor}
      />
      <Polygon points="276.7 0 290.98 0 290.98 36.17 276.7 36.17 276.7 0 276.7 0" fill={colors.grayLight} />
      <Polygon points="276.7 22.8 290.98 22.8 290.98 37.08 276.7 37.08 276.7 22.8 276.7 22.8" fill={colors.gray} />
      <Path
        d="M301.68,403.19H303a27.72,27.72,0,0,1,1.25,8.31,25.33,25.33,0,0,1,7.25-6.24,16.37,16.37,0,0,1,7.94-2.07,13.44,13.44,0,0,1,7.69,2,9,9,0,0,1,3.89,5,31.53,31.53,0,0,1,.86,8.51v13.45h-6.93V418.29a33.19,33.19,0,0,0-.48-6.79,6.25,6.25,0,0,0-2.45-3.64,7.89,7.89,0,0,0-5.05-1.57,11.91,11.91,0,0,0-6.73,2.16,22.62,22.62,0,0,0-6,6.4v17.29H297.4V419.28a68.37,68.37,0,0,0-.29-8.51,3,3,0,0,0-1.54-2.27q-1.24-.78-4.71-.78v-2.27a59.83,59.83,0,0,0,10.82-2.26Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
      />
      <Path
        d="M362.51,407.08H350.64v25.06h-6.86c0-.71,0-1.45,0-2.24V407.08h-5.72v-2.27a9.84,9.84,0,0,0,7.06-3.39q3.12-3.3,4-9.25h1.54v12.64h11.87v2.27Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
      />
      <Path
        d="M400.44,425.13a48.86,48.86,0,0,0,.45,7h-7.48a26,26,0,0,1-1-7.26,21.2,21.2,0,0,1,6.05-15.44,20.95,20.95,0,0,1,29.85,0,21.3,21.3,0,0,1,6.06,15.44,26.71,26.71,0,0,1-.93,7.26h-7.55a48.86,48.86,0,0,0,.45-7q0-10.62-3.32-15.15c-2.21-3-5.43-4.52-9.66-4.53S406,407,403.75,410s-3.31,8-3.31,15.15Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
      />
      <Path
        d="M446.66,403.19H448a27.09,27.09,0,0,1,1.25,8.31,25.49,25.49,0,0,1,7.26-6.24,16.36,16.36,0,0,1,7.93-2.07,13.4,13.4,0,0,1,7.69,2,9,9,0,0,1,3.9,5,31.94,31.94,0,0,1,.86,8.51v13.45h-6.92V418.29a33.19,33.19,0,0,0-.48-6.79,6.29,6.29,0,0,0-2.45-3.64,7.91,7.91,0,0,0-5.05-1.57,11.91,11.91,0,0,0-6.73,2.16,22.64,22.64,0,0,0-6,6.4v17.29h-6.82V419.28a68.37,68.37,0,0,0-.29-8.51,3,3,0,0,0-1.54-2.27q-1.24-.78-4.71-.78v-2.27a60,60,0,0,0,10.82-2.26Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
      />
      <Path
        d="M380.05,403.19v28.95h-6.88V419.08q0-7.08-.67-8.66a3.14,3.14,0,0,0-1.73-2,12.32,12.32,0,0,0-3.75-.39h-1.3V405.8A57.59,57.59,0,0,0,379,403.19Z"
        transform="translate(-89.1 -358.23)"
        fill={colors.gray}
      />
    </Svg>
  )
}

export default Logo
