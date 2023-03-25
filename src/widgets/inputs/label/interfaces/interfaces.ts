import { UseControllerProps, FieldError } from 'react-hook-form';

export interface ILabel<T extends FieldError> extends UseControllerProps<T> {
  error: FieldError | undefined;
  nameLabel?: string;
}
