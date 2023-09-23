import { TimeSlot } from "./weeklySchedule";

test('timeslot from three ints', ()=>{
    var test = new TimeSlot("", 100,200,300);
    
    expect(test.morningBlock).toBe(100);
    expect(test.middayBlock).toBe(200);
    expect(test.nightBlock).toBe(300);
});

test('Get stream of ones - len 0', ()=>{
    var test = TimeSlot.getOnesStreamOfLength(0);

    expect(test).toBe(0);
})

test('Get stream of ones - len 1', ()=>{
    var test = TimeSlot.getOnesStreamOfLength(1);

    expect(test).toBe(1);
})

test('Get stream of ones - len 4', ()=>{
    var test = TimeSlot.getOnesStreamOfLength(4);

    expect(test).toBe(15);
})

test('Get stream of ones - len 32', () =>{
    var test = TimeSlot.getOnesStreamOfLength(32);

    expect(test).toBe(4294967295);
})

test ("XOR with long streams", ()=>{
    var x = TimeSlot.getOnesStreamOfLength(32);
    var y = TimeSlot.getOnesStreamOfLength(30);

    var result = x ^ y;
    //11000000000000000000000000000000
    expect(result).toBe(-1073741824);

})


test ("XOR with short streams", ()=>{
    var x = TimeSlot.getOnesStreamOfLength(1);
    var y = TimeSlot.getOnesStreamOfLength(10);

    var result = x ^ y;
    //00000000000000000000001111111110
    expect(result).toBe(1022);
})


test("Brokenup Stream - Start at 0", ()=>{
    var test = TimeSlot.getBrokenUpStream(0);

    expect(test.morning).toBe(4294967295)
    expect(test.midday).toBe(4294967295)
    expect(test.night).toBe(4294967295)
})

test("Brokenup Stream - Start at 15", ()=>{
    var test = TimeSlot.getBrokenUpStream(15);

    expect(test.morning).toBe(131071)
    expect(test.midday).toBe(4294967295)
    expect(test.night).toBe(4294967295)
})

test("Brokenup Stream - Start at 16", ()=>{
    var test = TimeSlot.getBrokenUpStream(16);

    expect(test.morning).toBe(65535)
    expect(test.midday).toBe(4294967295)
    expect(test.night).toBe(4294967295)
})

test("Brokenup Stream - Start at 32", ()=>{
    var test = TimeSlot.getBrokenUpStream(32);

    expect(test.morning).toBe(0)
    expect(test.midday).toBe(4294967295)
    expect(test.night).toBe(4294967295)
})

test("Brokenup Stream - Start at 48", ()=>{
    var test = TimeSlot.getBrokenUpStream(48);

    expect(test.morning).toBe(0)
    expect(test.midday).toBe(65535)
    expect(test.night).toBe(4294967295)
})


test("Brokenup Stream - Start at 64", ()=>{
    var test = TimeSlot.getBrokenUpStream(64);

    expect(test.morning).toBe(0)
    expect(test.midday).toBe(0)
    expect(test.night).toBe(4294967295)
})

test("Brokenup Stream - Start at 80", ()=>{
    var test = TimeSlot.getBrokenUpStream(80);

    expect(test.morning).toBe(0)
    expect(test.midday).toBe(0)
    expect(test.night).toBe(65535)
})

test("Brokenup Stream - Start at 95", ()=>{
    var test = TimeSlot.getBrokenUpStream(95);

    expect(test.morning).toBe(0)
    expect(test.midday).toBe(0)
    expect(test.night).toBe(1)
})

test("Brokenup Stream - Start at 96", ()=>{
    var test = TimeSlot.getBrokenUpStream(96);

    expect(test.morning).toBe(0)
    expect(test.midday).toBe(0)
    expect(test.night).toBe(0)
})


test("TimeSlot - 0:00-24:00", ()=>{
    var string = "0:0-24:00"
    var test = new TimeSlot(string);

    // 11111111111111111111111111111111
    expect(test.morningBlock).toBe(-1);
    // 11111111111111111111111111111111
    expect(test.middayBlock).toBe(-1);
    // 11111111111111111111111111111111
    expect(test.nightBlock).toBe(-1);
})

test("TimeSlot - 0:00-23:45", ()=>{
    var string = "0:0-23:45"
    var test = new TimeSlot(string);

    // 11111111111111111111111111111111
    expect(test.morningBlock).toBe(-1);
    // 11111111111111111111111111111111
    expect(test.middayBlock).toBe(-1);
    // 11111111111111111111111111111110
    expect(test.nightBlock).toBe(-2);

})

test("TimeSlot - 4:00-8:00", ()=>{
    var string = "4:00-8:00"
    var test = new TimeSlot(string);

    // 00000000000000001111111111111111
    expect(test.morningBlock).toBe(65535);
    // 0
    expect(test.middayBlock).toBe(0);
    // 0
    expect(test.nightBlock).toBe(0);
})

test("TimeSlot - 4:00-8:00", ()=>{
    var string = "4:00-8:00"
    var test = new TimeSlot(string);

    // 00000000000000001111111111111111
    expect(test.morningBlock).toBe(65535);
    // 0
    expect(test.middayBlock).toBe(0);
    // 0
    expect(test.nightBlock).toBe(0);
})

test("TimeSlot - 4:00-8:15", ()=>{
    var string = "4:00-8:15"
    var test = new TimeSlot(string);

    // 00000000000000001111111111111111
    expect(test.morningBlock).toBe(65535);
    // 10000000000000000000000000000000
    expect(test.middayBlock).toBe(-2147483648);
    // 0
    expect(test.nightBlock).toBe(0);
})


test("TimeSlot - 3:00-4:30", ()=>{
    var string = "15:00-16:30"
    var test = new TimeSlot(string);

    expect(test.morningBlock).toBe(0);
    expect(test.middayBlock).toBe(15);
    expect(test.nightBlock).toBe(-1073741824);
})

test("Collides With - Collides Morning", ()=>{
    
    var string1 = "4:00-5:30";
    var string2 = "5:00-6:30";

    var test1 = new TimeSlot(string1);
    var test2 = new TimeSlot(string2);

    expect(test1.collidesWith(test2)).toBe(true);
})

test("Collides With - Doesn't Collide Morning", ()=>{
    
    var string1 = "4:00-5:30";
    var string2 = "5:30-6:30";

    var test1 = new TimeSlot(string1);
    var test2 = new TimeSlot(string2);

    expect(test1.collidesWith(test2)).toBe(false);
})

test("Collides With - Collides Midday", ()=>{
    
    var string1 = "8:00-10:15";
    var string2 = "9:45-10:15"

    var test1 = new TimeSlot(string1);
    var test2 = new TimeSlot(string2);

    expect(test1.collidesWith(test2)).toBe(true);

})

test("Collides With - Doesn't Collide Midday", ()=>{
    
    var string1 = "8:30-10:30";
    var string2 = "10:45-11:00";

    var test1 = new TimeSlot(string1);
    var test2 = new TimeSlot(string2);

    expect(test1.collidesWith(test2)).toBe(false);
})

test("Collides With - Collides Night", ()=>{
    
    var string1 = "16:00-18:15";
    var string2 = "17:00-18:45";

    var test1 = new TimeSlot(string1);
    var test2 = new TimeSlot(string2);

    expect(test1.collidesWith(test2)).toBe(true);

})

test("Collides With - Doesn't Collide Night", ()=>{
    
    var string1 = "16:00-16:30";
    var string2 = "15:00-15:30";

    var test1 = new TimeSlot(string1);
    var test2 = new TimeSlot(string2);

    expect(test1.collidesWith(test2)).toBe(false);
})