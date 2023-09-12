export default function CardStatus({
  status
}) {
  return (
    <div aria-hidden="true">
      {status === 'correct' ? 
        <svg data-testid="check-status-correct" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M35 18C35 27.3888 27.3888 35 18 35C8.61116 35 1 27.3888 1 18C1 8.61116 8.61116 1 18 1C27.3888 1 35 8.61116 35 18ZM36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18ZM11.0696 12.291C10.9536 12.639 10.9826 13.045 11.1566 13.509L15.3616 24.21C15.6129 24.8287 15.9416 25.283 16.3476 25.573C16.7729 25.863 17.2949 26.008 17.9136 26.008C19.1123 26.008 19.9436 25.4087 20.4076 24.21L24.6126 13.509C24.7866 13.045 24.8156 12.639 24.6996 12.291C24.5836 11.9623 24.3709 11.6917 24.0616 11.479C23.7716 11.2663 23.4429 11.1503 23.0756 11.131C22.7083 11.1117 22.3603 11.189 22.0316 11.363C21.7223 11.5563 21.4806 11.8657 21.3066 12.291L17.8701 21.2429L14.4336 12.291C14.2596 11.8657 14.0083 11.5563 13.6796 11.363C13.3703 11.189 13.0319 11.1117 12.6646 11.131C12.3166 11.1503 11.9879 11.2663 11.6786 11.479C11.3886 11.6917 11.1856 11.9623 11.0696 12.291Z" fill="#3E664B"/>
        </svg>
      :
        <svg data-testid="check-status-wrong" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M35 18C35 27.3888 27.3888 35 18 35C8.61116 35 1 27.3888 1 18C1 8.61116 8.61116 1 18 1C27.3888 1 35 8.61116 35 18ZM36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18ZM11.6124 25.3196C12.0013 25.6696 12.5165 25.8446 13.1582 25.8446C13.7803 25.8446 14.2858 25.7377 14.6747 25.5238C15.083 25.3099 15.4621 24.9794 15.8121 24.5322L17.9806 21.7855L20.1284 24.5322C20.4978 24.9988 20.8867 25.3391 21.295 25.553C21.7033 25.7474 22.2088 25.8446 22.8115 25.8446C23.4726 25.8446 23.9975 25.6696 24.3864 25.3196C24.7752 24.9502 24.9794 24.4933 24.9988 23.9489C25.0183 23.4045 24.7947 22.8601 24.3281 22.3157L20.9313 18.2122L23.9489 14.5289C24.4156 13.965 24.6391 13.4109 24.6197 12.8665C24.6197 12.3221 24.4253 11.8749 24.0364 11.525C23.667 11.175 23.1518 11 22.4907 11C21.888 11 21.3825 11.1069 20.9742 11.3208C20.5659 11.5152 20.177 11.8458 19.8076 12.3124L17.9994 14.6455L16.1912 12.3124C15.8218 11.8458 15.433 11.5152 15.0247 11.3208C14.6358 11.1069 14.1303 11 13.5081 11C12.8665 11 12.3513 11.175 11.9624 11.525C11.5736 11.8749 11.3694 12.3221 11.35 12.8665C11.35 13.3915 11.5736 13.9456 12.0207 14.5289L15.0416 18.2161L11.6708 22.3157C11.2236 22.8796 11 23.4337 11 23.9781C11.0194 24.5225 11.2236 24.9697 11.6124 25.3196Z" fill="#A54141"/>
        </svg>
      }
    </div>
  )
}