import { toClassname } from "../../helpers/utils";
import { classNameType } from "../base/props";

type HabitIndicatorType = {
  className?: classNameType,
  half?: boolean,
  empty?: boolean
}

export default function HabitIndicator(props: HabitIndicatorType) {
  return (
    <div className={toClassname([props.className, 'habit-indicator'])}>
      { props.half ? (
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.13594C0 0.648916 4.15084 -1.16845 6.71312 1.19673L26 19L43.8033 38.2869C46.1685 40.8492 44.3511 45 40.8641 45H12C5.37258 45 0 39.6274 0 33V4.13594Z" fill="currentColor"/>
        </svg>
      ) : props.empty ? null : (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" rx="12" fill="currentColor"/>
        </svg>
      )
      }
    </div>
  )
}