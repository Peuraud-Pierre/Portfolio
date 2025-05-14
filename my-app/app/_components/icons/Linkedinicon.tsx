import { ComponentPropsWithoutRef } from "react";

export const Linkedinicons = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5ZM7.12 20.47H3.56V9.04h3.56v11.43ZM5.34 7.47c-1.14 0-2.06-.93-2.06-2.08s.92-2.08 2.06-2.08c1.14 0 2.06.93 2.06 2.08 0 1.15-.92 2.08-2.06 2.08Zm15.13 12.99h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.33V9.04h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.23Z" />
    </svg>
  );
};
