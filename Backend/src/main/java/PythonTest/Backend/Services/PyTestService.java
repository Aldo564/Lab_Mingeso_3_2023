package PythonTest.Backend.Services;

import PythonTest.Backend.Entities.PyTestEntity;
import PythonTest.Backend.Repositories.PyTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PyTestService {

    @Autowired
    PyTestRepository pyTestRepository;

    public void guardarDataDB(PyTestEntity data)
    {
        pyTestRepository.save(data);
    }

    public void guardarData(String pregunta, String respuesta, Integer dif)
    {
        PyTestEntity newData = new PyTestEntity();
        newData.setPregunta(pregunta);
        newData.setRespuesta(respuesta);
        newData.setDificultad(dif);
        guardarDataDB(newData);
    }
}
