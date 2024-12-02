"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Wifi, WifiOff } from "lucide-react";

export const HomePage = () => {
  // Sample sensor data - replace with your actual data
  const sensors = [
    { id: 1, name: 'Temperature Sensor 1', status: 'online', lastReading: '24.5°C' },
    { id: 2, name: 'Humidity Sensor 1', status: 'online', lastReading: '65%' },
    { id: 3, name: 'Pressure Sensor 1', status: 'offline', lastReading: '1013 hPa' },
    { id: 4, name: 'Light Sensor 1', status: 'online', lastReading: '450 lux' },
    // Add more sensors as needed
  ];

  const [selectedSensor, setSelectedSensor] = useState<number | null>(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">My Sensors</h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {sensors.map((sensor) => (
              <Button
                key={sensor.id}
                variant={selectedSensor === sensor.id ? "secondary" : "ghost"}
                className="w-full justify-start mb-2"
                onClick={() => setSelectedSensor(sensor.id)}
              >
                <div className="flex items-center w-full">
                  {sensor.status === 'online' ? (
                    <Wifi className="w-4 h-4 mr-2 text-green-500" />
                  ) : (
                    <WifiOff className="w-4 h-4 mr-2 text-red-500" />
                  )}
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{sensor.name}</span>
                    <span className="text-xs text-gray-500">{sensor.lastReading}</span>
                  </div>
                </div>
              </Button>
            ))}
          </ScrollArea>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {selectedSensor ? (
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Values</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add your graph components here */}
                <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                  Graph placeholder
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Historical Data</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add your graph components here */}
                <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                  Graph placeholder
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            Select a sensor to view its data
          </div>
        )}
      </div>
    </div>
  );
};