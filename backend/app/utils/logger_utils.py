import logging
from logging.handlers import RotatingFileHandler
from os import path
import pathlib
from typing import Optional


# Función para crear la carpeta de logs si no existe (opcional)
def create_logs_folder(folder: str | None = "logs", name : str | None = "app.log"): # versions >=3.10
    """
    Crea la carpeta indicada si no existe.
    """
    BASE_DIR = pathlib.Path(__file__).resolve().parent.parent
    path_log = BASE_DIR / folder
    if not path_log.exists():
        path_log.mkdir(parents=True, exist_ok=True)
    path_log = path_log / name
    return path_log

LOG_FILE_PATH = create_logs_folder()

# Intentar importar colorlog para logs en consola con colores
try:
    import colorlog

    COLORLOG_AVAILABLE = True
except ImportError:
    COLORLOG_AVAILABLE = False

# Definir un nuevo nivel de log: VERBOSE (por ejemplo, con valor entre DEBUG y INFO)
VERBOSE_LEVEL_NUM = 15
logging.addLevelName(VERBOSE_LEVEL_NUM, "VERBOSE")


def verbose(self, message, *args, **kwargs):
    """
    Método para loguear en el nivel VERBOSE.
    """
    if self.isEnabledFor(VERBOSE_LEVEL_NUM):
        self._log(VERBOSE_LEVEL_NUM, message, args, **kwargs)


# Agregar el método verbose a la clase Logger de logging
logging.Logger.verbose = verbose


class LoggerConfigurator:
    """
    Clase para configurar y obtener loggers.
    """

    def __init__(
        self,
        logger_name="models-utils",
        log_file=LOG_FILE_PATH,
        log_level=logging.INFO,
        max_bytes=5 * 1024 * 1024,
        backup_count=3,
    ):
        self.logger_name = logger_name
        self.log_file = log_file
        self.log_level = log_level
        self.max_bytes = max_bytes
        self.backup_count = backup_count

    def get_formatter(self):
        """
        Retorna un formateador común con timestamp detallado.
        """
        return logging.Formatter(
            "%(asctime)s - %(levelname)s - %(filename)s - %(message)s",
            datefmt="%d-%b-%y %H:%M:%S",
        )

    def get_console_handler(self):
        """
        Configura y retorna el handler de consola.
        """
        console_handler = logging.StreamHandler()
        if COLORLOG_AVAILABLE:
            console_formatter = colorlog.ColoredFormatter(
                "%(log_color)s%(asctime)s - %(levelname)s - %(filename)s - %(message)s",
                datefmt="%d-%b-%y %H:%M:%S",
                log_colors={
                    "DEBUG": "cyan",
                    "VERBOSE": "blue",
                    "INFO": "green",
                    "WARNING": "yellow",
                    "ERROR": "red",
                    "CRITICAL": "bold_red",
                },
            )
            console_handler.setFormatter(console_formatter)
        else:
            console_handler.setFormatter(self.get_formatter())
        return console_handler

    def get_file_handler(self):
        """
        Configura y retorna el handler de archivo con rotación.
        """
        file_handler = RotatingFileHandler(
            self.log_file, maxBytes=self.max_bytes, backupCount=self.backup_count
        )
        file_handler.setFormatter(self.get_formatter())
        return file_handler

    def setup(self):
        """
        Configura el logger con handlers de consola y archivo.
        """
        logger = logging.getLogger(self.logger_name)
        logger.setLevel(self.log_level)
        logger.addHandler(self.get_file_handler())
        logger.addHandler(self.get_console_handler())
        return logger


# Uso de la clase LoggerConfigurator
configurator = LoggerConfigurator(
    log_level=VERBOSE_LEVEL_NUM
)  # Ahora el nivel mínimo es VERBOSE
logger = configurator.setup()

""" # Ejemplos de uso de los distintos niveles
logger.debug("Mensaje de DEBUG")
logger.verbose("Mensaje de VERBOSE")  # Nuevo nivel personalizado
logger.info("Mensaje de INFO")
logger.warning("Mensaje de WARNING")
logger.error("Mensaje de ERROR")
logger.critical("Mensaje de CRITICAL")
"""
