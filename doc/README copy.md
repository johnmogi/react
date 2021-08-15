# react
# Re-react

learn react from scratch  

0. make the same course as jb + projects just instead of ts use functional 

2019-12-08 - React - New Project, Components, Layout
https://nodejs.org/en/download/
update nodejs - v

center  card and proceed
remarks: 

scss un-solved
css test not conducted
basic function in the footer - works but not memorized.

base theme for mui - unsolved.


base - rename to 1_base


generics bu:
https://www.typescriptlang.org/play?strictNullChecks=false&ssl=43&ssc=1&pln=1&pc=1#code/PTAEHEFMDtIJwJYGMDOAoEpB7oIddBA7oIOeggK6ChFaDboIJugeJWgC6CAnoJZYPugogi6CBHoHqIBuglDQKuggQ9BQgS9A6lQAegg0JUDLoIM4dOgK9AOU5urL5iGMFkrjKgwGeggC9BQdQe2YFe2HYRIEbyrCSLDBgJdBQndkFLImtbe1JhBlMBIzE8QTQ0JAAbAEMUFFAAZQBZLIAeABUAPlAAbzRQKtAABwBXACNk5FqACwB7WAAuUBQAF0RoAHMAbkrq+qaWgFtIDNShyB7CsfGqyeakUCRO-rg6pD72uAAKGo7u3oGEYYAaUFn5xeWASnK16qq+1oQUADpzp1IKAALxtIFjT6fb6-P6PFALYFg+GIyHVAC+iU+GxaKBgABMTi8egA3doIfHvKHVfHtJB1WbQPp-ADuiD6kBOACIsgSbkNQFzQABqUAw-4oxYiwVi9o9IWi8UAi7A0Vc-INODFLkvNFVTGY-SgAC0prN5otlqt1uNiR20H6vWmKAAjKDQLAWdk8vloAyGvBityAAwAVgATABOAAcADZQ9GAOwAFi592T4d1aBQzpdfzx0EJWaSuz6TpQ4fdnu9BT2-KDXLDUbjCZTacFAAlIMlku0dWMcxX8wSiat7Y7BwBmKuQL25AoAEVSHIbTZj8aTqfu1aXHKJWanw8Lo8SSTSGVAhX2ADFUsk8fPQJAAB4cwuZeca9rtZKQVLQUoKjQQ1xzLQdkxnL0rzqW970gecQwjWNJ1DGNQy3MV9kgYsUnSD86hqeBPxKJ9XwJD8fRIioQNLctQ0g7ICKIn062GVcIxdcN0M3dsuQ7BB+1PIA

// Generics
// מחלקה המכילה מאפיין בעל טיפוס שאינו ידוע בעת בניית המחלקה
// מי שיוצר אובייקט מהמחלקה קובע מה הסוג עבור האוביקט הספציפי שלו

class SMS<T> {
    public phone: string;
    public message: T;

    public constructor(phone: string, message: T) {
        this.phone = phone;
        this.message = message;
    }

    public send(): void {
        document.write("Sending " + this.message + " to: " + this.phone + "<br>");
    }
}

// -------------------------------------

const sms1 = new SMS<number>("0529865874", 42);
sms1.send();

const sms2 = new SMS<string>("0529865874", "Hello");
sms2.send();

const sms3 = new SMS<Date>("0529865874", new Date());
sms3.send();


class TruFalseSMS extends SMS<boolean> {

}

const sms4 = new TruFalseSMS("0526359854", true);

class SuperSMS<T> extends SMS<T> {
}

const sms5 = new SuperSMS<string>("0521254874", "Hi");






