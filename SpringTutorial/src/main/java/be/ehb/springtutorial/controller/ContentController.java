package be.ehb.springtutorial.controller;

import be.ehb.springtutorial.model.Content;
import be.ehb.springtutorial.repository.ContentRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@RequestMapping("/api/content")
@CrossOrigin
public class ContentController {
    private final ContentRepository repository;

    @Autowired
    public ContentController(ContentRepository contentRepository) {
        this.repository = contentRepository;
    }

    //make a request and find all the pieces of content in the system
    @GetMapping("")
    public List<Content> findAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Content findById(@PathVariable Integer id) {
        return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Content not found"));
    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void create(@Valid @RequestBody Content content) {
        repository.save(content);
    }
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    public void update(@RequestBody Content content, @PathVariable Integer id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Content not found");
        }
        repository.save(content);
    }
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        repository.findById(id).orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Content not found"));
        repository.deleteById(id);
    }

    @GetMapping("/filter/title/{keyword}")
    public List<Content> findByTitle(@PathVariable String keyword) {
        return repository.findAllByTitleContains(keyword);
    }

    @GetMapping("/filter/desc/{keyword}")
    public List<Content> findByDescription(@PathVariable String keyword) {
        return repository.findAllByDescContains(keyword);
    }

    @GetMapping("/filter/price/{min}/{max}")
    public List<Content> findByPrice(@PathVariable Double min, @PathVariable Double max) {
        return repository.findAllByPriceBetween(min, max);
    }
}
