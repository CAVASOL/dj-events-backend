// const slugify = require("slugify");

// module.exports = {
//   beforeCreate(createdEvent) {
//     const { data } = createdEvent.params;

//     if (data.name) {
//       data.slug = slugify(data.name, { lower: true });
//     }
//   },

//   beforeUpdate(updatedEvent) {
//     const { data } = updatedEvent.params;

//     if (data.name) {
//       data.slug = slugify(data.name, { lower: true });
//     }
//   },
// };

const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    setSlug(event.params.data);
  },
  beforeUpdate(event) {
    setSlug(event.params.data);
  },
};

const setSlug = (data) => {
  if (data.name) {
    data.slug = slugify(data.name.toLowerCase());
  }
};
