export const schemaEmail = {
  required: "поля является обязательной",
  maxLength: { value: 50, message: "ERROR" },
};

export const schemaPsw = {
  required: "поля является обязательной",
  minLength: { value: 6, message: "минимум 6" },
  maxLength: { value: 50, message: "ERROR" },
};
