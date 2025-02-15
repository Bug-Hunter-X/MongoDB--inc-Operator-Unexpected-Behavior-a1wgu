```javascript
// Incorrect usage of $inc operator
db.collection.updateMany({"_id":ObjectId("someId")},{"$inc":{"field":"value"}});
```