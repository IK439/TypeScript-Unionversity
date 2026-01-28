# TypeScript-Unionversity

## Description
This program allows users to search for courses or study groups by ID or keyword. It maintains separate lists for courses and study groups, filters results based on the search criteria, and allows enrollment in selected events. The program demonstrates how to organize, search, and manage educational events.

## Coding Techniques
- TypeScript type annotations for `Course`, `StudyGroup`, and search options
- Array filtering using `Array.prototype.filter` for dynamic search
- Conditional logic for handling numeric IDs vs. string keywords
- Case-insensitive string matching for keyword searches
- Modular code structure with separate imports for courses and study groups
- Enrollment management using arrays to track selected events

## Example Output
```
Search results: [
  {
    id: 5,
    studyGroupId: 5,
    title: 'Photography for Beginners',
    keywords: [ 'camera', 'photography', 'light', 'composition' ],
    eventType: 'course'
  }
]
Enrolled events: [
  {
    id: 5,
    studyGroupId: 5,
    title: 'Photography for Beginners',
    keywords: [ 'camera', 'photography', 'light', 'composition' ],
    eventType: 'course'
  }
]
```
