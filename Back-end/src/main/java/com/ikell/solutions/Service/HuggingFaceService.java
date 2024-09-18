package com.ikell.solutions.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class HuggingFaceService {

    @Value("${huggingface.api.key}")
    private String apiKey;

    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public String chatWithAI(String userInput) {
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(
                mediaType,
                "{\"inputs\": \"" + userInput + "\"}"
        );

        Request request = new Request.Builder()
                .url("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill")
                .post(body)
                .addHeader("Authorization", "Bearer " + apiKey)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Unexpected code " + response);
            }

            String jsonResponse = response.body().string();
            JsonNode jsonNode = objectMapper.readTree(jsonResponse);

            // Asegúrate de que el JSON tenga el formato esperado
            if (jsonNode.isArray() && jsonNode.size() > 0) {
                JsonNode firstElement = jsonNode.get(0);
                if (firstElement.has("generated_text")) {
                    return firstElement.get("generated_text").asText();
                } else {
                    throw new IOException("Response JSON does not contain 'generated_text' field.");
                }
            } else {
                throw new IOException("Response JSON is not in the expected format.");
            }
        } catch (IOException e) {
            // Manejo de errores más detallado
            e.printStackTrace();
            return "Error: " + e.getMessage();
        }
    }

}
