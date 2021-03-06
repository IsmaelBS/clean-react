import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'
import { CompareFieldValidation } from '@/validation/validators/compare-fields/compare-fields'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validation: FieldValidation[]
  ) { }

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validation.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validation.push(new EmailValidation(this.fieldName))
    return this
  }

  min (length: number): ValidationBuilder {
    this.validation.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  sameAs (fieldToCompare: string): ValidationBuilder {
    this.validation.push(new CompareFieldValidation(this.fieldName, fieldToCompare))
    return this
  }

  build (): FieldValidation[] {
    return this.validation
  }
}
