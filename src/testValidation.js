import { createStudentSchema } from './validation/students.js';

const dataValidate = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 12,
  gender: 'male',
  avgMark: 10.2,
};

const validationResult = createStudentSchema.validate(dataValidate);
if (validationResult.error) {
  console.error(validationResult.error.message);
} else {
  console.log('Data is valid!');
}
