package be.ehb.springtutorial.model;

import jakarta.validation.constraints.NotBlank;
import org.springframework.data.annotation.Id;

public record Content (
        @Id
        Integer id,
        @NotBlank
        String title,
        String category,
        String desc,
        String username,
        String email,
        Double price,
        String image
) {
}
