# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon error related to the MongoDB $inc operator.  The issue arises when attempting to increment a field that doesn't exist or isn't of the correct type (specifically, not a number). The solution showcases how to correctly handle such situations using proper error checking and potentially employing the $setOnInsert operator for initial value setting.

## Bug Description
The $inc operator is intended to increment a numeric field by a specified value. However, if the target field is missing or isn't a number, unexpected behavior can occur.  This might lead to data corruption or errors in your application.