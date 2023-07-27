type IconProps = {
  name: string;
  className?: string;
};

export default function Icon(props: IconProps) {
  const { name, className } = props;
  switch (name) {
    case 'map-pin':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className ?? 'w-6 h-6'}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      );
    case 'sun':
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className ?? 'w-12 h-12'}
        >
          <g clipPath="url(#clip0_3_497)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32 55.2C44.813 55.2 55.2 44.813 55.2 32C55.2 19.187 44.813 8.8 32 8.8C19.187 8.8 8.8 19.187 8.8 32C8.8 44.813 19.187 55.2 32 55.2ZM56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32C8 18.7452 18.7452 8 32 8C45.2548 8 56 18.7452 56 32Z"
              fill="#FFF308"
              fillOpacity="0.2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.8667 52C42.986 52 52 42.986 52 31.8667C52 20.7473 42.986 11.7333 31.8667 11.7333C20.7474 11.7333 11.7334 20.7473 11.7334 31.8667C11.7334 42.986 20.7474 52 31.8667 52ZM53.0667 31.8667C53.0667 43.5751 43.5751 53.0667 31.8667 53.0667C20.1582 53.0667 10.6667 43.5751 10.6667 31.8667C10.6667 20.1582 20.1582 10.6667 31.8667 10.6667C43.5751 10.6667 53.0667 20.1582 53.0667 31.8667Z"
              fill="#FFF308"
              fillOpacity="0.6"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.8666 49.8667C41.8078 49.8667 49.8666 41.8078 49.8666 31.8667C49.8666 21.9255 41.8078 13.8667 31.8666 13.8667C21.9255 13.8667 13.8666 21.9255 13.8666 31.8667C13.8666 41.8078 21.9255 49.8667 31.8666 49.8667Z"
              fill="#FFEC65"
            />
          </g>
        </svg>
      );

    default:
      return null;
  }
}
