```javascript
db.collection.updateOne( { "_id": ObjectId("someId") },
  { 
    $inc: { field: value },
    $setOnInsert: { field: 0 } // Initialize if the field doesn't exist 
  },
  { upsert: true } // Create document if not found
);
```