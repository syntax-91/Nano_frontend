import { useForm } from "react-hook-form";
import { Block } from "../../components/Block";
import { Button } from "../../components/Button";

import { Space } from "../../components/Space";
import { schemaEmail, schemaPsw } from "../../shared/schema/schema";
import { useState } from "react";
import { submit } from "./api";
import { Span } from "../../components/Span";
import { userStore } from "../../app/store/userStore";
import { useNavigate } from "react-router-dom";

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const n = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handler = () => {
    setIsLoading(true);

    submit().then((e) => {
      if (e?.success) {
        userStore.isAuth = true;
        n("/");
      }

      setIsLoading(false);
    });
  };

  return (
    <Block cls="authForm up p20" radius={15}>
      <form onSubmit={handleSubmit(handler)}>
        <h2>Авторизация</h2>

        <input
          style={{
            display: "block",
          }}
          placeholder="Введите почту"
          className="r10"
          {...register("email", schemaEmail)}
        />

        <Space h={5} />

        {/* err email */}
        {errors.email?.message ? (
          <Span type="danger" text={errors.email.message as string} />
        ) : (
          ""
        )}

        <input
          style={{
            display: "block",
          }}
          placeholder="Введите пароль"
          className="r10"
          {...register("psw", schemaPsw)}
        />

        {/* err psw */}
        {errors.psw?.message ? (
          <Span type="danger" text={errors.psw.message as string} />
        ) : (
          ""
        )}

        <Space h={5} />

        <Button type="submit" isLoading={isLoading} label="submit" />
      </form>
    </Block>
  );
}
