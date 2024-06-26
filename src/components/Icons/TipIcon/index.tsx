import { Icon, IconProps } from "@chakra-ui/react";

const defaultProps = {
  boxSize: 5,
};

function TipIcon({ ...props }: IconProps) {
  return (
    <Icon fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M9.5 14.4995C9.5 14.7757 9.72386 14.9995 10 14.9995C10.2761 14.9995 10.5 14.7757 10.5 14.4995V8.49951C10.5 8.22337 10.2761 7.99951 10 7.99951C9.72386 7.99951 9.5 8.22337 9.5 8.49951V14.4995Z" />
      <path d="M10 5.00391C10.2761 5.00391 10.5 5.22776 10.5 5.50391C10.5 5.78005 10.2761 6.00391 10 6.00391C9.72386 6.00391 9.5 5.78005 9.5 5.50391C9.5 5.22776 9.72386 5.00391 10 5.00391Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.5C14.6944 1.5 18.5 5.30558 18.5 10C18.5 14.6944 14.6944 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10C1.5 5.30558 5.30558 1.5 10 1.5ZM10 2.61111C14.0808 2.61111 17.3889 5.91923 17.3889 10C17.3889 14.0808 14.0808 17.3889 10 17.3889C5.91923 17.3889 2.61111 14.0808 2.61111 10C2.61111 5.91923 5.91923 2.61111 10 2.61111Z"
      />
    </Icon>
  );
}

TipIcon.defaultProps = defaultProps;

export default TipIcon;
