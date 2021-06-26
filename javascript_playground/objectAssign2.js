const form = {
  firstName: null,
  lastName: null,
};

const input = {
  firstName: "홍길동",
};

const result = Object.assign(form, input);
console.log(result);
console.log();

// complicated example
const form_complicated = {
  firstName: null,
  lastName: null,
  Email: null,
  zipCode: null,
  Address: null,
  Phone: null,
};

const input_complicated = {
  firstName: 'John', 
  lastName: 'Doe',
  Email: "John@example.com",
};

const result_complicated = Object.assign(form_complicated, input_complicated);
console.log(result_complicated);
console.log();
console.log(form_complicated);
console.log();

const address = {
  Address: {
    Prefecture: 'Tokyo',
    address_1: 'Setagaya-ku',
    address_2: 'kyoudou1',
  }
}

const result_address_added = Object.assign(form_complicated, address);
console.log(result_address_added);
console.log();