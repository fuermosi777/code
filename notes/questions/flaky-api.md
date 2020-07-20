http://shortn/_FJhXBVcqaQ

fetch(temperatureUrl).then(displayTemperature);

ordered backup list

```js
temperatureUrlArray = [
  "http://....best-data.json",
  "average-data.json",
  "worst-data.json",
];
```

Update your app to display the _best available temperature_.
We don't care about the latency, we don't care whether the network is slow or fast. We just want the best data available.

Issue the request following the order of the list.

It isn't until 150ms where you know to resolve with the results from request C, because A and B where more accurate, but failed. This means they also need to store the results somewhere and track which requests have completed.

- Q2. Minimize latency at the expense of accuracy (Promise.any)
  We just want to show the data asap regardless of the quality of the data.

- Q3. Minimize latency, but show the best data (depending on whether the candidate uses multiple fetch at the same time, if yes then no need to ask this).
  When you start maximizing for latency and accuracy, you want to start multiple fetches at the same time, but then block on when specific fetches complete. This is a mixture of async and sync code which likely requires some recursion. For example:
  0ms: Start requests for A, B, C
  50ms: C succeeds
  100ms: B fails
  150ms: A fails -> return C

=== [Follow up questions:] ===
What if the array has 10,000 urls? (Connection pool?)
Caching strategies?
Error handling?
How would you design the UX when it's loading and loading takes longer than expected?
