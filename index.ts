import courses from "./courses";
import studyGroups from "./studyGroups";

// Type representing a course
type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

// Type representing a study group
type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

// Type for searching events
type SearchEventsOptions = {
  query: string | number;
  eventType: string;
};

// Search for courses or study groups based on ID or keyword
function searchEvents(options: SearchEventsOptions) {
  // Select the appropriate pool of events
  let events: (Course | StudyGroup)[] =
    options.eventType === "courses" ? courses : studyGroups;

  // Filter events based on query type
  return events.filter((event) => {
    if (typeof options.query === "number") {
      // Match by event ID
      return options.query === event.id;
    }

    if (typeof options.query === "string") {
      // Match by keyword (case-insensitive)
      const queryStr = options.query.toLowerCase();
      return event.keywords.some((k) => k.toLowerCase() === queryStr);
    }

    return false;
  });
}

// List to store enrolled events
let enrolledEvents: (Course | StudyGroup)[] = [];

// Add an event to the enrolled list
function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event);
}

// Look for 'photography' courses
let searchResults = searchEvents({
  query: "photography",
  eventType: "courses",
});
console.log("Search results:", searchResults);

// Enroll the first result if available
if (searchResults.length > 0) {
  enroll(searchResults[0]);
}

console.log("Enrolled events:", enrolledEvents);