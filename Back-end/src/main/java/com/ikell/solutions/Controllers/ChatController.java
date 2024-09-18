package com.ikell.solutions.Controllers;

import com.ikell.solutions.Service.HuggingFaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private HuggingFaceService huggingFaceService;

    @PostMapping
    public String chat(@RequestBody String message) {
        try {
            return huggingFaceService.chatWithAI(message);
        } catch (Exception e) {
            // Maneja excepciones no previstas (IOException ya está manejado en el servicio)
            return "Error inesperado: " + e.getMessage();
        }
    }

}
