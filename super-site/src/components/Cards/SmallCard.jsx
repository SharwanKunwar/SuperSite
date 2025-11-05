import * as React from "react";
import { Card, CardContent, Typography, Avatar, Box, } from "@mui/material";

export default function SmallCard() {
  return (
    <Card
    className="w-[300px]! h-40 bg-white/30! border border-white/30"
      sx={{
        width: 250,
        borderRadius: 2,
        bgcolor: "#f5f5f5",
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={1.5}>
          <Avatar
            src="/vite.svg"
            alt="Figma"
            sx={{ bgcolor: "white", p: 1, width: 40, height: 40 }}
            variant="rounded"
          />
          <Typography variant="h6" fontWeight="500" color="white">
            Figma
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" className="text-gray-300!">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          voluptatibus!
        </Typography>
      </CardContent>
    </Card>
  );
}
