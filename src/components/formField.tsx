import React from "react";
import { Button, Label, Text } from "@fabric-msft/fluent-react";
import { Tooltip } from "@fluentui/react-components";
import styles from "./FormField.module.css";
import { Info16Regular } from "@fluentui/react-icons";

interface FormFieldProps {
  label?: string;
  isWarning?: boolean;
  isError?: boolean;
  required?: boolean;
  warningText?: string;
  errorText?: string;
  children: React.ReactNode;
  id?: string;
  tooltip?: string;
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
  tooltip,
}) => (
  <div id={id} className={styles.formField}>
    {label && (
      <Label required={required} weight="semibold" className={styles.label}>
        {label}
        {tooltip && (
          <Tooltip content={tooltip} relationship="label">
            <Info16Regular />
          </Tooltip>
        )}
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
