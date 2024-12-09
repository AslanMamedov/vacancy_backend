## Backend Description

The backend of the Job Tracking Web Portal provides a reliable and scalable foundation for all the platform's functionalities. It is responsible for data processing, secure user interactions, and database integration.

### Key Features

- **API Endpoints**: Provides RESTful API for seamless interaction between the frontend and backend.
- **Get Job Listings**: Implements an API to retrieve a list of all available job openings.
- **Get Tests for Job Listings**: Provides an API for fetching tests associated with specific job listings. The tests contain questions and answer options.
- **Submit Test Answers**: Processes answers submitted by users, checks correctness, and stores results in the database.
- **Get Test Scores and Answers**: Allows users to view test results, including the score, correct answers, and incorrect answers.
- **Submit CV for a Job**: Provides the ability to upload a CV for a selected job, followed by saving the file on the server.

### Technologies

- **Backend Framework**: NestJS.
