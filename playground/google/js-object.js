var company = {
  name: 'Google',
  addressLine1: '202 Some St',
  addressLine2: '',
  zip: '12345',
  state: 'CA',
  country: 'US',
  get address() {
    return this.addressLine1 + ', ' + this.addressLine2 + ', ' + this.zip;
  },
  isInCalifornia() {
    return this.state === 'CA';
  }
}

console.log(company.address)
console.log(company.isInCalifornia())