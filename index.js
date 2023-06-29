const contacts = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log("allContacts:", allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log("getContactById:", contact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log("newContact:", newContact);
      break;

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      console.log("deletedContact:", deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
