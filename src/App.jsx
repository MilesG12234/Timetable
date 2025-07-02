import { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";

const days = [
  "Day 1", "Day 2", "Day 3", "Day 4", "Day 5",
  "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"
];

const timetableData = [
 { day: "Day 1", time: "Period 1", subject: "0eEN2b6i", room: "SJO (E19)" },
  { day: "Day 1", time: "Period 2", subject: "0cCA2b7j", room: "KLI (MU17)" },
  { day: "Day 1", time: "Period 3", subject: "0hHl2b4j", room: "TCA (G15)" },
  { day: "Day 1", time: "Period 4", subject: "0hHl2b4j", room: "TCA (G15)" },
  { day: "Day 1", time: "Period 5", subject: "0gEP2b5b", room: "GWA (MU27)" },
  { day: "Day 1", time: "Period 6", subject: "0mGM2b2b", room: "KBE (G5)" },

  { day: "Day 2", time: "Period 1", subject: "0sFS2b7f", room: "CBU (MQ35)" },
  { day: "Day 2", time: "Period 2", subject: "2rRS2b3d", room: "SHA (W23)" },
  { day: "Day 2", time: "Period 3", subject: "0mGM2b2b", room: "KBE (G5)" },
  { day: "Day 2", time: "Period 4", subject: "0mGM2b2b", room: "KBE (G5)" },
  { day: "Day 2", time: "Period 5", subject: "0pHT2b1b", room: "ACO (W18)" },
  { day: "Day 2", time: "Period 6", subject: "0pHT2b1b", room: "ACO (W18)" },

  { day: "Day 3", time: "Period 1", subject: "0sFS2b7f", room: "CBU (Y4)" },
  { day: "Day 3", time: "Period 2", subject: "0sFS2b7f", room: "CBU (Y4)" },
  { day: "Day 3", time: "Period 3", subject: "0eEN2b6i", room: "SJO (E19)" },
  { day: "Day 3", time: "Period 4", subject: "2rRS2b3d", room: "SHA (W23)" },
  { day: "Day 3", time: "Period 5", subject: "0pHT2b1b", room: "ACO (W18)" },
  { day: "Day 3", time: "Period 6", subject: "0hHI2b4j", room: "TCA (G15)" },

  { day: "Day 4", time: "Period 1", subject: "2rRS2b3d", room: "SHA (W23)" },
  { day: "Day 4", time: "Period 2", subject: "2rRS2b3d", room: "SHA (W23)" },
  { day: "Day 4", time: "Period 3", subject: "0pEP2b5b", room: "GWA (E22)" },
  { day: "Day 4", time: "Period 4", subject: "0mGM2b2b", room: "KBE (G5)" },
  { day: "Day 4", time: "Period 5", subject: "0eEN2b6i", room: "SJO (E19)" },
  { day: "Day 4", time: "Period 6", subject: "0eEN2b6i", room: "SJO (E19)" },

  { day: "Day 5", time: "Period 1", subject: "0pEP2b5b", room: "GWA (E22)" },
  { day: "Day 5", time: "Period 2", subject: "0pEP2b5b", room: "GWA (E22)" },
  { day: "Day 5", time: "Period 3", subject: "0pHT2b1b", room: "ACO (W18)" },
  { day: "Day 5", time: "Period 4", subject: "UTPERN02", room: "BLL (W3)" },
  { day: "Day 5", time: "Period 5", subject: "0hHI2b4j", room: "TCA (G15)" },
  { day: "Day 5", time: "Period 6", subject: "0sFS2b7f", room: "CBU (MQ36)" },

  { day: "Day 6", time: "Period 1", subject: "0mGM2b2b", room: "KBE (G5)" },
  { day: "Day 6", time: "Period 2", subject: "0mGM2b2b", room: "KBE (G5)" },
  { day: "Day 6", time: "Period 3", subject: "0eEN2b6i", room: "SJO (E19)" },
  { day: "Day 6", time: "Period 4", subject: "2rRS2b3d", room: "SHA (W23)" },
  { day: "Day 6", time: "Period 5", subject: "0sFS2b7f", room: "CBU (MQ35)" },
  { day: "Day 6", time: "Period 6", subject: "0pEP2b5b", room: "GWA (E22)" },

  { day: "Day 7", time: "Period 1", subject: "0hHI2b4j", room: "TCA (G15)" },
  { day: "Day 7", time: "Period 2", subject: "0hHI2b4j", room: "TCA (G15)" },
  { day: "Day 7", time: "Period 3", subject: "0sFS2b7f", room: "CBU (MU7)" },
  { day: "Day 7", time: "Period 4", subject: "0mGM2b2b", room: "KBE (G5)" },
  { day: "Day 7", time: "Period 5", subject: "0pHT2b1b", room: "ACO (W18)" },
  { day: "Day 7", time: "Period 6", subject: "0pHT2b1b", room: "ACO (W18)" },

  { day: "Day 8", time: "Period 1", subject: "0sFS2b7f", room: "CBU (Y4)" },
  { day: "Day 8", time: "Period 2", subject: "0sFS2b7f", room: "CBU (Y4)" },
  { day: "Day 8", time: "Period 3", subject: "0pHT2b1b", room: "ACO (W18)" },
  { day: "Day 8", time: "Period 4", subject: "0hHI2b4j", room: "TCA (G15)" },
  { day: "Day 8", time: "Period 5", subject: "0eEN2b6i", room: "SJO (E19)" },
  { day: "Day 8", time: "Period 6", subject: "2rRS2b3d", room: "SHA (W23)" },

  { day: "Day 9", time: "Period 1", subject: "2rRS2b3d", room: "SHA (W23)" },
  { day: "Day 9", time: "Period 2", subject: "2rRS2b3d", room: "SHA (W23)" },
  { day: "Day 9", time: "Period 3", subject: "0pEP2b5b", room: "GWA (E22)" },
  { day: "Day 9", time: "Period 4", subject: "0pEP2b5b", room: "GWA (E22)" },
  { day: "Day 9", time: "Period 5", subject: "0eEN2b6i", room: "SJO (E19)" },
  { day: "Day 9", time: "Period 6", subject: "0eEN2b6i", room: "SJO (E19)" },

  { day: "Day 10", time: "Period 1", subject: "0pHT2b1b", room: "ACO (W18)" },
  { day: "Day 10", time: "Period 2", subject: "0hHI2b4j", room: "TCA (G15)" },
  { day: "Day 10", time: "Period 3", subject: "0mGM2b2b", room: "KBE (G5)" },
  { day: "Day 10", time: "Period 4", subject: "UTPERN02", room: "BLL (W3)" },
  { day: "Day 10", time: "Period 5", subject: "0cCA2b7i", room: "KLI (MU17)" },
  { day: "Day 10", time: "Period 6", subject: "0pEP2b5b", room: "GWA (E22)" }
];


export default function TimetableApp() {
  const cycleStartDate = new Date("2025-06-30"); // Day 1 start

  const calculateCurrentDay = () => {
    const today = new Date();
    const timeDiff = today - cycleStartDate;
    const daysSinceStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const cycleDayIndex = daysSinceStart % 10;
    return days[cycleDayIndex >= 0 ? cycleDayIndex : (cycleDayIndex + 10)];
  };

  const [selectedDay, setSelectedDay] = useState(calculateCurrentDay());
  const [filteredClasses, setFilteredClasses] = useState([]);

  useEffect(() => {
    const filtered = timetableData.filter(c => c.day === selectedDay);
    setFilteredClasses(filtered);
  }, [selectedDay]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">My Interactive Timetable</h1>

      <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
        <TabsList className="flex justify-center flex-wrap gap-2">
          {days.map(day => (
            <TabsTrigger
              key={day}
              value={day}
              className={`capitalize ${["Day 2", "Day 5", "Day 7", "Day 9"].includes(day) ? "bg-green-100" : ""}`}
            >
              {day}
            </TabsTrigger>
          ))}
        </TabsList>

        {days.map(day => (
          <TabsContent key={day} value={day}>
  <div className={`${["Day 2", "Day 5", "Day 7", "Day 9"].includes(day) ? "bg-green-50 p-4 rounded-md" : ""}`}>
    {selectedDay === day && filteredClasses.length === 0 ? (
      <p className="text-center text-gray-500">No classes found.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {filteredClasses.map((cls, index) => (
          <Card key={index} className="bg-white shadow-md border border-gray-200 rounded-md">
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-gray-800">{cls.time}</p>
              <p className="text-gray-700 text-sm">
                {cls.subject}{cls.room ? ` in room ${cls.room}` : ""}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    )}
  </div>
</TabsContent>

        ))}
      </Tabs>
    </div>
  );
}
