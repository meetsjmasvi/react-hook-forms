import * as React from "react";
import { useForm } from "react-hook-form";
import { Header } from "./Header";

let renderCount = 0;

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  test?: string;
};

export function UserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  renderCount++;

  const isValidAge = (age: number) => age >= 20 && age <= 55;
  const errorAge = () => {
    if (errors.age && errors.age.type === "validate") {
      return <p>Age should be between 20 to 55</p>;
    }
  };

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="This is just the number of counte the component get rendered"
      />
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("firstName", {
            required: {
              value: true,
              message: "Firstname is mandatory field!",
            },
          })}
          placeholder="First Name"
        />
        <p>{errors.firstName?.message}</p>
        <input
          {...register("lastName", {
            minLength: 4,
            required: "Minimum length should be 4",
          })}
          name="lastName"
          placeholder="Last Name"
        />
        <input
          {...register("age", {
            valueAsNumber: true,
            required: "Age is mandatory field!",
            validate: isValidAge,
          })}
          type="number"
          placeholder="Age"
        />
        <p>{errorAge()}</p>

        <input type="submit" />
      </form>
    </div>
  );
}
