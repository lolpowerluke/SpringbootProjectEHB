package be.ehb.springtutorial;

import be.ehb.springtutorial.model.Content;
import be.ehb.springtutorial.repository.ContentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class SpringTutorialApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringTutorialApplication.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(ContentRepository repository) {
        return args -> {
            //insert some data into the database
            Content content1 = new Content(
                    null,
                    "Rood T-shirt",
                    "T-shirt",
                    "mooi rood t-shirt",
                    "LukasVH",
                    "jebaited@gmail.com",
                    10.00,
                    "http://localhost:5500/images/S1owG3P.png"
            );
            repository.save(content1);
            Content content2 = new Content(
                    null,
                    "Blauw T-shirt",
                    "T-shirt",
                    "mooi blauw t-shirt",
                    "LukasVH",
                    "jebaited@gmail.com",
                    10.00,
                    "http://localhost:5500/images/4aD9i3T.png"
            );
            repository.save(content2);
            Content content3 = new Content(
                    null,
                    "Groen T-shirt",
                    "T-shirt",
                    "mooi groen t-shirt",
                    "LukasVH",
                    "jebaited@gmail.com",
                    15.00,
                    "http://localhost:5500/images/jGsV0Fq.png"
            );
            repository.save(content3);
            Content content4 = new Content(
                    null,
                    "Geel T-shirt",
                    "T-shirt",
                    "mooi geel t-shirt",
                    "LukasVH",
                    "jebaited@gmail.com",
                    20.00,
                    "http://localhost:5500/images/irjQQc3.png"
            );
            repository.save(content4);
            Content content5 = new Content(
                    null,
                    "Oranje T-shirt",
                    "T-shirt",
                    "mooi oranje t-shirt",
                    "LukasVH",
                    "jebaited@gmail.com",
                    25.00,
                    "http://localhost:5500/images/mm14CNy.png"
            );
            repository.save(content5);
            Content content6 = new Content(
                    null,
                    "Paars T-shirt",
                    "T-shirt",
                    "mooi paars t-shirt",
                    "LukasVH",
                    "jebaited@gmail.com",
                    15.00,
                    "http://localhost:5500/images/a9zKnZ6.png"
            );
            repository.save(content6);
            Content content7 = new Content(
                    null,
                    "Zwart T-shirt",
                    "T-shirt",
                    "mooi zwart t-shirt",
                    "LukasVH",
                    "jebaited@gmail.com",
                    20.00,
                    "http://localhost:5500/images/jibRvQ3.png"
            );
            repository.save(content7);
            Content content8 = new Content(
                    null,
                    "Wit T-shirt",
                    "T-shirt",
                    "mooi wit t-shirt",
                    "LukasVH",
                    "jebaited@gmail.com",
                    15.00,
                    "http://localhost:5500/images/WIFFVia.png"
            );
            repository.save(content8);
            Content content9 = new Content(
                    null,
                    "Zwarte Hoodie",
                    "T-shirt",
                    "mooie rode hoodie",
                    "LukasVH",
                    "jebaited@gmail.com",
                    15.00,
                    "http://localhost:5500/images/small-logo-hoodie-zwart-wit.webp"
            );
            repository.save(content9);
        };
    }
}
