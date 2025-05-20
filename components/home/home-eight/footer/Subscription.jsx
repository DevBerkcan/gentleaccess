"use client";
import Field from "@/components/common/Field";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
function Subscription() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Danke für Ihre Anmeldung!");
		reset();
		console.log("Formular gesendet = ", formData);
	};
	return (
		<div className="sofax-subscription-field5">
			<ToastContainer position="bottom-right" />
			<form onSubmit={handleSubmit(submitForm)}>
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email ist erforderlich." })}
						type="email"
						name="email"
						id="email"
						className="field-item"
						placeholder="Ihre E-Mail-Adresse"
						aria-label="E-Mail-Adresse für Newsletter"
					/>
				</Field>
				<button type="submit" className="sofax-subcribe-btn2">
					Jetzt anmelden
				</button>
			</form>
		</div>
	);
}

export default Subscription;