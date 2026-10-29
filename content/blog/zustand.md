---
title: Zustand: Straight Forward State Management
date: 2023-03-31
tags: react, typescript
---

When you think of implementing a state management system in React,
you usually think of it as a tedious process. If you're using something like Redux or MobX,
you'll have to set up all the required boilerplate
often requiring mutliple files and
wrapping your app in some provider from the library.
But what if state management didn't have to be this complex? Enter [Zustand](https://github.com/pmndrs/zustand).

Honestly, Zustand is quite simple and a small demo should _hopefully_ be enough to convince you to check it out,
so I'm going to keep the code simple here.

## A Simple Demo: Counter State

In normal React, we'd use a `useState()` hook to handle the counter,
but this obviously has the shortcomings of being restricted to the component.

```typescript
import { useState } from "react";

function MyComponent() {
  const [number, setNumber] = useState(0);
  return (
    <button onClick={() => setNumber(number + 1)}>Number: {number}</button>
  );
}
```

In zustand, we can make something similar by creating a hook using `create()`.
In this case our hook is called `useCounterStore()`.

```typescript
import { create } from "zustand";

export const useCounterStore = create((set) => ({
  number: 0,
  setNumber: (number: number) => set(() => ({ number: number })),
}));
```

We can now use `useCounterStore()` in any of our components using a syntax quite similar to `useState()`!

```typescript
import { useCounterStore } from "./store.ts";

function MyComponent() {
  const { number, setNumber } = useCounterStore();
  return (
    <button onClick={() => setNumber(number + 1)}>Number: {number}</button>
  );
}
```

## But what about types?

If you want to add TypeScript types to the store you just have to specify the type in the `create()` function.
I've switched up the context of the state from a counter to a profile here, as it makes more sense with having multiple types.

I haven't experimented with it much but I like idea of having two seperate types, one for Data and one for Setters and then merge them together in the create function.

```typescript
import { create } from "zustand";

// Type for the store data
type ProfileData = {
  name?: string;
  id?: string;
};

// Type for the store setter functions
type ProfileSetters = {
  setName: (name: string) => void;
  setId: (id: string) => void;
};

// Merging types here to access both
export const useProfileStore = create<ProfileData & ProfileSetters>((set) => ({
  name: undefined,
  id: undefined,

  setName: (name: string) => set(() => ({ name: name })),
  setId: (id: string) => set(() => ({ id: id })),
}));
```

We now have autocomplete and type safety in our destructured object!

```typescript
import { useProfileStore } from "./store.ts";

function MyComponent() {
  // Auto complete here!
  const { name } = useProfileStore();
  return <></>;
}
```

Well, that's all I wanted to share! :) 

I Hope this tutorial inspired you to check out zustand! 
This was something I instantly wanted to share with people as soon as I saw it and it gave me a good excuse to write my first blog post about it.
Hopefully I'll be writing more soon, I've got so many tools to share!

