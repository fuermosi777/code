https://ideas.corp.google.com/InterviewQuestions/view?idea=1953&start=20&sort=approval

https://docs.google.com/document/d/12FReVkYN7OvRk5ecKACadVL-yHme5bXK8j_X5B26Nxs/preview

GIVEN STATEMENT
We have a machine that we want to run different programs on according to a schedule (start time and execution duration) everyday. We want to check if a new program can be added to the schedule on the same machine.

INITIAL PROBLEM:
Only 1 program can be running at any given time.
Example:
Already Scheduled: P1(10, 5), P2(25, 15)
New Program (18, 7) => can schedule
New Program (12, 10) => cannot schedule

COMPLETE PROBLEM:
The computer machine has multiple cores. 4 programs can be running at any given time.
Example:
Already Scheduled: P1(10, 5), P2(5, 15), P3(20, 15), P4(18, 6), P5(15, 5), P6(12, 9)
New Program: (14, 3) => can schedule
New Program: (18, 3) => cannot schedule

Already Scheduled: P1(5, 15), P2(8, 25), P3(12, 8), P4(22, 10), P5(25, 15)
New Program (18, 7) => can schedule
New Program (12, 10) => cannot schedule

PROGRESSION
1. [Warm-up question] What DS would you use to store the schedule.?
2. [Initial problem] Single process on the computer.
3. Multiple processes allowed - up to 4.


CLARIFICATIONS
* Single machine running the scheduled programs.
* The start time and running duration for the new program is known.
* No need to work on inserting into the schedule (plus points if they ask this straight up).
* Existing schedule is valid - no need to verify.
* Times are granular to some unit (always integers) - uniform for all values of time we have to deal with.
* No startup time / turndown time.
* No time to switch tasks between cores.
* It does not matter if the system can / cannot switch a task between two cores.


COMMENTS:
Letting candidates explore and work out different options gives an insight into their problem solving skills.

I usually let the candidate describe the data-structure they would want the schedule to be in. Once I am satisfied they know how it could be constructed and/or they can describe it properly, I let them assume this data-structure is available and ask them to implement the search part.
So the function declaration looks like (Python):

  def can_schedule(schedule, query_task):
    return True / False;

An area where the candidates trip is they start working on adding the query_task to the given schedule. I try to steer them away from this and ask them not to think of it at the moment. This affects decisions about what kind of DS to use.

Most candidates start wondering that if knew in advance what core / tracks (or whatever) each scheduled program is running on we can test if a single core / track is vacant for the entirety of the query_task. This is an incorrect solution (bonus points if they can spot that), but it leads to a correct solution. Still there are better approaches in terms of running time.


WHY THIS WORKS:
* The initial warm-up problem tests the basic data-structure + algo understanding of the candidates.
* The Complete Problem encourages you to think outside the box (in terms of what data-structure to store the schedule in) while still applying principles / basics of data-structures.
* There can be multiple ways to approach the problem, and watching them tackle the problem helps understand their logical and analytical abilities.


Details for solutions and expected timeline in the doc (linked at the top).