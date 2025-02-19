// PhoneNumbers.js: Client for the Zendesk Voice API.
const {Client} = require('../client');

class PhoneNumbers extends Client {
  constructor(options) {
    super(options);
    this.jsonAPINames = ['phone numbers', 'phone number'];
  }

  // Searching Available PhoneNumbers
  async search(searchTerm) {
    return this.get(['phone_numbers', 'search', {query: searchTerm}]);
  }

  // List PhoneNumbers
  async list() {
    return this.get(['phone_numbers']);
  }

  // Create PhoneNumbers
  async create(phone_number) {
    return this.post(['phone_numbers'], phone_number);
  }

  // Update PhoneNumbers
  async update(phoneID, phone_number) {
    return this.put(['phone_numbers', phoneID], phone_number);
  }

  // Get PhoneNumbers by ID
  async show(phoneID) {
    return this.get(['phone_numbers', phoneID]);
  }

  // Delete PhoneNumbers
  async delete(phoneID) {
    return this.delete(['phone_numbers', phoneID]);
  }
}

exports.PhoneNumbers = PhoneNumbers;
