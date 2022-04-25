# Hook [useTimer]

- Hook that returns countdown values.
- Styling must be done

## 🚀 How to use

```jsx
   const Example: React.FunctionComponent = () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);

      //2022-03-18T18:42:08.486Z (ISO format)
      const finalDate = currentDate.toISOString();
      const { secondsSTR, minutesSTR, hoursSTR, daysSTR, active } = useTimer(finalDate);

      if(!active) return null;

      const countdown = [
         { text: 'Days', item: daysSTR },
         { text: 'Hours', item: hoursSTR },
         { text: 'Minutes', item: minutesSTR },
         { text: 'Seconds', item: secondsSTR },
      ];

      return(
         <div className="countdown--container">
            {
               countdown.map(({ item, text }, index) => (
                  <div key={String(index)}>
                     <div className="countdown-item">
                        <p>{item}</p>
                        <span>{text}</span>
                     </div>
                     {/* Optional => Countdown Separator */} 
                     { index < countdown.length - 1 && <span className="separator"> : </span>}
                  </div>
               ))
            }
         </div>
      );
   };
```

## 💻 Documentation

### Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `finalDate`  | `string` | String in ISO format: `YYYY-MM-DDTHH:mm:ss.sssZ` `required` | - |

### Returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `secondsRemain`  | `number` | Seconds (seconds + hours + days + minutes) left to finish the counter  | - |
| `active`  | `boolean` | Returns if time is positive  | - |
| `days`  | `number` | Days left to finish the counter  | - |
| `hours`  | `number` | Hours left to finish the counter  | - |
| `minutes`  | `number` | Minutes left to finish the counter  | - |
| `seconds`  | `number` | Seconds left to finish the counter  | - |
| `daysSTR`  | `string` | Days left to finish the counter `formatted`  | - |
| `hoursSTR`  | `string` | Hours left to finish the counter `formatted` | - |
| `minutesSTR`  | `string` | Minutes left to finish the counter `formatted` | - |
| `secondsSTR`  | `string` | Seconds left to finish the counter `formatted` | - |


## 🔖 Layout

<p align="left">
<img width="493" alt="Countdown example" src="https://user-images.githubusercontent.com/61842405/159068730-a5e6d203-1037-4405-8e37-b65ea36eb399.png">

</p>

## 👨🏻‍💻 Developers
- [Raphael Capeto](https://github.com/rcapeto)


