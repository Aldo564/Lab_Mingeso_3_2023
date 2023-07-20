package PythonTest.Backend.Controllers;

import PythonTest.Backend.Entities.PyTestEntity;
import PythonTest.Backend.Repositories.PyTestRepository;
import PythonTest.Backend.Services.PyTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import java.util.ArrayList;

@RestController
@RequestMapping("/pytest")
public class PyTestController {

    @Autowired
    PyTestService pyTestService;

    @Autowired
    PyTestRepository pyTestRepository;

    @GetMapping("/preguntas/{dif}")
    public ResponseEntity<ArrayList<PyTestEntity>> obtenerPreguntas(@PathVariable("dif") Integer dif)
    {
        ArrayList<PyTestEntity> preguntas = pyTestRepository.findByDif(dif);
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/pregunta/{id}")
    public ResponseEntity<PyTestEntity> obtenerPregunta(@PathVariable("id") Integer id)
    {
        PyTestEntity pregunta = pyTestRepository.findById(id);
        if(pregunta == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(pregunta);
    }

    @PostMapping("/pregunta")
    public ResponseEntity<Boolean> guardarPregunta(@RequestBody PyTestEntity pregunta)
    {
        pyTestRepository.save(pregunta);
        return ResponseEntity.ok(true);
    }

    @PostMapping("/respuesta")
    public ResponseEntity<Integer> verificarRespuesta(@RequestBody ArrayList<String> respuesta, @RequestBody ArrayList<Integer> id)
    {
        int puntaje = pyTestService.verificarRespuestas(id, respuesta);
        return ResponseEntity.ok(puntaje);
    }

}
