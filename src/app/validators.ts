import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validarNome(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (RegExp('^[A-Za-z]*$').test(String(control.value))) {
            return {
                erro: {
                    value: control.value
                }
            }
        };
        return {};
    }
}