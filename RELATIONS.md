## Relations

We will connect models with each other using foreignKeys = userId

### 1. Database/Migration level

- Creating the foreignKey column => new migration (recommended)
- Specify the references (model, key)
- Migrating
- Seeding.

(Check in DB Client if possible)

### 2. Connecting at model level

- Letting the models know that this relation exists.
- Adding the associations to the models.

todoList.belongsTo(models.user);
user.hasMany(models.todoList);

## 3. Seed and try!
