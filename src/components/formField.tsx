import React from "react";
import { Label, TextInput, Text } from "@fabric-msft/fluent-react";
import styles from "./FormField.module.css";

interface FormFieldProps {
  label?: string;
  isWarning?: boolean;
  isError?: boolean;
  required?: boolean;
  warningText?: string;
  errorText?: string;
  children: React.ReactNode;
  id?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  isWarning,
  isError,
  required,
  warningText,
  errorText,
  children,
  id,
}) => (
  <div id={id} className={styles.formField}>
    {label && (
      <Label required={required} weight="semibold" className={styles.label}>
        {label}
      </Label>
    )}
    {children}
    {isWarning && (
      <Text
        size="200"
        className={`${styles.text} ${styles["helper-text"]}`}
        block
      >
        <span>{warningText}</span>
      </Text>
    )}
    {isError && (
      <Text size="200" className={`${styles.text} ${styles.error}`} block>
        <span>{errorText}</span>
      </Text>
    )}
  </div>
);

export default FormField;
